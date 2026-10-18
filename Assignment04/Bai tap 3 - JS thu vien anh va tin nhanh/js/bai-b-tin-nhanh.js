/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

const oTimKiem = document.getElementById("o-tim-kiem");
const dsTin = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
function capNhatBoDem() {
	const cacMuc = Array.from(dsTin.querySelectorAll("li"));
	const tongSo = cacMuc.length;
	const soHien = cacMuc.filter(muc => !muc.classList.contains("an")).length;
	boDem.textContent = `Đang hiển thị ${soHien}/${tongSo} tin`;
}

// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
function locTin() {
	const tuKhoa = oTimKiem.value;
	const tuKhoaThuong = tuKhoa.toLowerCase();
	const cacMuc = Array.from(dsTin.querySelectorAll("li"));

	let soKhop = 0;
	for (const muc of cacMuc) {
		const tieuDe = muc.querySelector("h3") ? muc.querySelector("h3").textContent : "";
		const noiDung = muc.querySelector("p") ? muc.querySelector("p").textContent : "";
		const vanBan = tieuDe + " " + noiDung;

		if (tuKhoa === "" || vanBan.toLowerCase().includes(tuKhoaThuong)) {
			muc.classList.remove("an");
			soKhop++;
		} else {
			muc.classList.add("an");
		}
	}

	if (tuKhoa !== "" && soKhop === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
	} else {
		khongThay.classList.add("an");
	}

	capNhatBoDem();
}

oTimKiem.addEventListener("keyup", locTin);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
dsTin.addEventListener("click", (e) => {
	const nut = e.target.closest("button.more");
	if (!nut || !dsTin.contains(nut)) {
		return;
	}

	const li = nut.closest("li");
	if (!li) return;

	const doanVan = li.querySelector("p");
	if (!doanVan) return;

	if (doanVan.classList.contains("day-du")) {
		doanVan.classList.remove("day-du");
		nut.textContent = "Read more >>";
	} else {
		doanVan.classList.add("day-du");
		nut.textContent = "Thu gọn <<";
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
	const tieuDeVal = oTieuDe.value;
	const noiDungVal = oNoiDung.value;

	if (tieuDeVal.trim() === "" || noiDungVal.trim() === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	baoLoi.textContent = "";

	const mucMoi = document.createElement("li");

	const theTime = document.createElement("span");
	theTime.className = "time";
	theTime.textContent = typeof homNay === "function" ? homNay() : "";

	const theH3 = document.createElement("h3");
	theH3.textContent = tieuDeVal;

	const theP = document.createElement("p");
	theP.textContent = noiDungVal;

	const theButton = document.createElement("button");
	theButton.type = "button";
	theButton.className = "more";
	theButton.textContent = "Read more >>";

	mucMoi.append(theTime, theH3, theP, theButton);
	dsTin.prepend(mucMoi);

	oTieuDe.value = "";
	oNoiDung.value = "";

	locTin();
});

// Khởi chạy khi tải trang
locTin();
