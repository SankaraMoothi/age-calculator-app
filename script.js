function valDate(date) {
  let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;

  // Matching the date through regular expression
  if (date.match(dateformat)) {
    let operator = date.split("/");

    // Extract the string into month, date and year
    let datepart = [];
    if (operator.length > 1) {
      datepart = date.split("/");
    }
    let day = parseInt(datepart[0]);
    let month = parseInt(datepart[1]);
    let year = parseInt(datepart[2]);

    // Create a list of days of a month
    let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 1 || month > 2) {
      if (day > ListofDays[month - 1]) {
        //to check if the date is out of range
        console.log("Invalid date");
        return "Invalid date";
      }
    } else if (month == 2) {
      let leapYear = false;
      if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
      if (leapYear == false && day >= 29) {
        console.log("Invalid date");
        return "leapYear dude";
      } else if (leapYear == true && day > 29) {
        console.log("Invalid date format!");
        return "leapYear dude";
      }
    }
  } else {
    console.log("Invalid date format!");
    return false;
  }
  return true;
}

const button = document
  .getElementById("button")
  .addEventListener("click", () => {
    const days = document.getElementById("days").value;
    const months = document.getElementById("months").value;
    const years = document.getElementById("years").value;

    const dop = valDate(`${days}/${months}/${years}`);
    if (dop === true) {
      // Example usage:

      let age = calculateAge(`${years}-${months}-${days}`);
      console.log(age); // Output: 32
      const year = (document.getElementById("year").innerText = age.years);
      const month = (document.getElementById("month").innerText = age.months);
      const day = (document.getElementById("day").innerText = age.days);
    } else if (dop == "Invalid date") {
      const error = (document.getElementById("errorday").innerText =
        "Invalid date");
      const para = (document.getElementById("p").style.color = "red");
      const days = (document.getElementById("days").style.border =
        "1px solid red");
    } else if (dop == "leapYear dude") {
      const error = (document.getElementById("errorday").innerText =
        "leapYear dude");
      const errorm = (document.getElementById("errormonth").innerText =
        "leapYear dude");

      const days = (document.getElementById("days").style.border =
        "1px solid red");
      const months = (document.getElementById("months").style.border =
        "1px solid red");
      const para = (document.getElementById("p").style.color = "red");
      const param = (document.getElementById("pm").style.color = "red");
    } else if (dop == false) {
      const error = (document.getElementById("errorday").innerText =
        "Invalid Format");
      const errorm = (document.getElementById("errormonth").innerText =
        "Invalid Format");
      const errory = (document.getElementById("erroryear").innerText =
        "Invalid Format");
      const days = (document.getElementById("days").style.border =
        "1px solid red");
      const months = (document.getElementById("months").style.border =
        "1px solid red");
      const years = (document.getElementById("years").style.border =
        "1px solid red");
      const para = (document.getElementById("p").style.color = "red");
      const param = (document.getElementById("pm").style.color = "red");
      const paray = (document.getElementById("py").style.color = "red");
    }
  });

function calculateAge(birthdate) {
  let today = new Date();
  let birthDate = new Date(birthdate);
  let ageYear = today.getFullYear() - birthDate.getFullYear();
  let ageMonth = today.getMonth() - birthDate.getMonth();
  let ageDay = today.getDate() - birthDate.getDate();

  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth = 12 + ageMonth;
    if (ageDay < 0) {
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageMonth--;
    }
  }
  if (ageMonth === 0 && ageDay === 0) {
    ageYear++;
  }

  return { years: ageYear, months: ageMonth, days: ageDay };
}
