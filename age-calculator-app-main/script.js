document.getElementById("calculateBtn").addEventListener("click", function () {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
      alert("La fecha no puede ser en el futuro.");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    document.getElementById("result-years").textContent = years;
    document.getElementById("result-months").textContent = months;
    document.getElementById("result-days").textContent = days;
  });