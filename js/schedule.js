function showDetail($subject) {
  if ($subject === "seminar") {
    document.getElementById("detail").innerHTML =
      "01418497 (sec 2)<br>Seminar<br>อ.ชาคริต วัชโรภาส, อ.ศิริกร จันทร์นวล";
  } else if ($subject === "web-tech") {
    document.getElementById("detail").innerHTML =
      "01418442 (sec 1, 11)<br>Web Technology and Web Services<br>อ.สุขุมาล กิติสิน";
  } else if ($subject === "se") {
    document.getElementById("detail").innerHTML =
      "01418471 (sec 1, 11)<br>Introduction to Software Engineering<br>อ.อุษา สัมมาพันธ์";
  } else if ($subject === "erp") {
    document.getElementById("detail").innerHTML =
      "01418342 (sec 1, 11)<br>Enterprise Resource Planning System Design and Development<br>อ.พบสิทธิ์ กมลเวชช";
  } else if ($subject === "ip") {
    document.getElementById("detail").innerHTML =
      "01418341 (sec 1)<br>Intellectual Properties and Professional Ethics<br>อ.นวลวรรณ สุนทรภิษัช";
  } else if ($subject === "os") {
    document.getElementById("detail").innerHTML =
      "01418331 (sec 1)<br>Operating Systems<br>อ.ศิริกร จันทร์นวล";
  } else if ($subject === "sa") {
    document.getElementById("detail").innerHTML =
      "01418321 (sec 1)<br>System Analysis and Design<br>อ.สมโชค เรืองอิทธินันท์";
  }
}
