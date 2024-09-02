// kerakli id larni chaqirib oldim
const input = document.getElementById("input");
const button = document.getElementById("button");

// button bosilganda inputdagi malumotlar chiqadi
button.addEventListener("click", addList);

// inmutga malumot kiritilgandan so'ng buttonni bosishni o'rniga "Enter" tugmasini bossa inputdagi malumotlar chiqadi
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addList(e);
  }
});

function addList(e) {
  const notCompleted = document.getElementById("notCompleted");
  const Completed = document.getElementById("Completed");

  // child teglarni qo'shib oldik
  const newList = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  delBtn.innerHTML = `<i class="fa fa-trash"></i>`;
  checkBtn.innerHTML = `<i class="fa fa-check"></i>`;

  const notCompleted_h3 = document.getElementById("notCompleted_h3");
  notCompleted_h3.style.display = "block";

  // inputdan kelgan malumotlarni chiqarib beradi
  if (input.value !== "") {
    // Bosh harfni katta qilib o'zgartiramiz
    const capitalizedValue =
      input.value.charAt(0).toUpperCase() + input.value.slice(1);

    newList.textContent = capitalizedValue;
    input.value = "";
    notCompleted.appendChild(newList);
    newList.appendChild(delBtn);
    newList.appendChild(checkBtn);

    // inputdan kelgan malumotlarni nechtaligini chiqarib beradi
    updateTaskCount();
  }

  // inputdan kelgan malumotni check qilib pastdagi completed diviga olib tushib qo'yadi
  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";

    const Completed_h3 = document.getElementById("Completed_h3");
    Completed_h3.style.display = "block";

    updateTaskCount();
    updateTaskCountDone();
  });

  // inputdan kelgan malumotni o'chirib tashlaydi
  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();

    // yangilash
    updateTaskCount();
    updateTaskCountDone();
  });
}

// inputdan kelgan malumotlarni nechtaligini chiqarib beradi
function updateTaskCount() {
  const notCompleted = document.getElementById("notCompleted");
  const taskCount = notCompleted.getElementsByTagName("li").length;

  const notCompleted_h3 = document.getElementById("notCompleted_h3");
  if (taskCount > 0) {
    notCompleted_h3.style.display = "block";
    notCompleted_h3.innerText = `Tasks to do - ${taskCount}`;
  } else {
    notCompleted_h3.style.display = "none";
  }
}

// inputdan kelgan malumotlarni nechtasi check bo'lganini sonini chiqarib beradi
function updateTaskCountDone() {
  const Completed = document.getElementById("Completed");
  const taskCountDone = Completed.getElementsByTagName("li").length;

  const Completed_h3 = document.getElementById("Completed_h3");
  if (taskCountDone > 0) {
    Completed_h3.style.display = "block";
    Completed_h3.innerText = `Done - ${taskCountDone}`;
  } else {
    Completed_h3.style.display = "none";
  }
}
