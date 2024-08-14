$(document).ready(function () {
  $("#sendCodeButton").click(function () {
    var phoneNumber = $("#phoneNumber").val();
    if (phoneNumber) {
      // Simulate sending verification code
      $("#successMessage").show();
      $("#verificationCodeGroup").show();
    }
  });

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    var verificationCode = $("#verificationCode").val();
    if (verificationCode) {
      // Simulate verification code check
      alert("Verification successful!");
      // Redirect to the dashboard or another page
      window.location.href = "loading.html";
    } else {
      alert("Please enter the verification code.");
    }
  });
});
