function goToResult(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const seat = document.getElementById('seat').value;
  const nid = document.getElementById('nid').value;

  localStorage.setItem('studentName', name);
  localStorage.setItem('seatNumber', seat);
  localStorage.setItem('nidNumber', nid);

  window.location.href = "result.html";
}

function generateGrades() {
  const subjects = [
    "اللغة العربية",
    "اللغة الإنجليزية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "التاريخ",
    "الجغرافيا"
  ];

  return subjects.map(subject => {
    return {
      name: subject,
      grade: Math.floor(Math.random() * 50) + 50
    };
  });
}

if (window.location.pathname.includes("result.html")) {
  document.getElementById("name").innerText = localStorage.getItem('studentName');
  document.getElementById("seat").innerText = localStorage.getItem('seatNumber');
  document.getElementById("nid").innerText = localStorage.getItem('nidNumber');

  const gradesList = document.getElementById("grades");
  const grades = generateGrades();

  grades.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.grade}`;
    gradesList.appendChild(li);
  });
}