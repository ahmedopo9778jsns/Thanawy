
function goToResult(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const seat = document.getElementById('seat').value;
  const nid = document.getElementById('nid').value;
  const division = document.getElementById('division').value;

  localStorage.setItem('studentName', name);
  localStorage.setItem('seatNumber', seat);
  localStorage.setItem('nidNumber', nid);
  localStorage.setItem('division', division);

  window.location.href = "result.html";
}

function generateGrades(division) {
  const subjects = [
    "اللغة العربية",
    "اللغة الإنجليزية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "التاريخ",
    "الجغرافيا",
    "الإحصاء"
  ];

  return subjects.map(subject => {
    let grade = 0;

    // تحديد المواد غير التابعة للشعبة
    const notInLiterary = ["الفيزياء", "الكيمياء", "الأحياء", "الرياضيات"];
    const notInScienceMath = ["التاريخ", "الجغرافيا", "الإحصاء", "الأحياء"];
    const notInScienceBio = ["التاريخ", "الجغرافيا", "الإحصاء", "الرياضيات"];

    const excludedSubjects =
      division === "أدبي" ? notInLiterary :
      division === "علمي رياضة" ? notInScienceMath :
      division === "علمي علوم" ? notInScienceBio : [];

    if (excludedSubjects.includes(subject)) {
      grade = 0;
    } else {
      if (subject === "اللغة العربية") {
    grade = Math.floor(Math.random() * 19) + 62; // من 62 إلى 80
} else {
    grade = Math.floor(Math.random() * 16) + 45; // من 45 إلى 60
}
    }

    return {
      name: subject,
      grade: grade
    };
  });
}

if (window.location.pathname.includes("result.html")) {
  const division = localStorage.getItem('division');
  document.getElementById("name").innerText = localStorage.getItem('studentName');
  document.getElementById("seat").innerText = localStorage.getItem('seatNumber');
  document.getElementById("nid").innerText = localStorage.getItem('nidNumber');
  document.getElementById("division").innerText = division;

  const gradesList = document.getElementById("grades");
  const grades = generateGrades(division);

  grades.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.grade}`;
    gradesList.appendChild(li);
  });
}
// بعد حساب درجات المواد داخل صفحة result.html

function calculatePercentage(totalGrades) {
    const maxTotal = 320; // المجموع الكلي النهائي
    const percentage = (totalGrades / maxTotal) * 100;
    return percentage.toFixed(2); // ترجيع النسبة برقم عشري من خانتين
}

// مثال: حساب مجموع الدرجات وإظهار النسبة
function displayResult() {
    const grades = JSON.parse(localStorage.getItem('studentGrades') || '[]');
    const total = grades.reduce((sum, g) => sum + g.grade, 0);

    // حساب النسبة المئوية
    const percentage = calculatePercentage(total);

    // عرض المجموع والنسبة المئوية داخل صفحة النتيجة
    document.getElementById("total-grade").textContent = `المجموع: ${total} / 320`;
    document.getElementById("percentage").textContent = `النسبة المئوية: ${percentage}%`;
}
<script>
  // مثال: جلب الدرجات من العناصر أو من كائن محفوظ
  const degrees = {
    arabic: parseInt(document.getElementById("arabic").innerText),
    english: parseInt(document.getElementById("english").innerText),
    secondLang: parseInt(document.getElementById("secondLang").innerText),
    philosophy: parseInt(document.getElementById("philosophy").innerText),
    history: parseInt(document.getElementById("history").innerText),
    geography: parseInt(document.getElementById("geography").innerText),
    biology: parseInt(document.getElementById("biology").innerText),
    chemistry: parseInt(document.getElementById("chemistry").innerText),
    physics: parseInt(document.getElementById("physics").innerText),
    geology: parseInt(document.getElementById("geology").innerText),
    mathPure: parseInt(document.getElementById("mathPure").innerText),
    mathApplied: parseInt(document.getElementById("mathApplied").innerText)
  };

  // حساب المجموع
  const total = Object.values(degrees).reduce((a, b) => a + b, 0);

  // المجموع الكلي حسب الشعبة (مثلاً علمي علوم)
  const maxTotal = 80 + 5 * 60;

  // حساب النسبة
  const percentage = ((total / maxTotal) * 100).toFixed(2);

  // عرضها في الصفحة
  document.getElementById("percentage").innerText = `النسبة المئوية: ${percentage}%`;
</script>
