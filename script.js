<<<<<<< HEAD
function reduceToDigit(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((a, b) => +a + +b, 0);
  }
  return n;
}

function buildPyramid(arr) {
  let levels = [arr];
  while (levels[levels.length - 1].length > 2) {
    const prev = levels[levels.length - 1];
    const next = [];
    for (let i = 0; i < prev.length - 1; i++) {
      next.push(prev[i] + prev[i + 1]); // no reduction here
    }
    levels.push(next);
  }
  return levels;
}

function handleUnified() {
  const input = document.getElementById("unifiedInput").value.toUpperCase().trim();
  const resultArea = document.getElementById("resultArea");
  resultArea.innerHTML = "";

  if (!input || input.length === 0) {
    resultArea.innerHTML = "<div class='final-output'>❌ Please enter something valid.</div>";
    return;
  }

  const charToNum = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
  };

  const digits = [];

  for (let ch of input) {
    if (/[0-9]/.test(ch)) {
      digits.push(parseInt(ch)); // keep digit
    } else if (/[A-Z]/.test(ch)) {
      digits.push(charToNum[ch] || 0); // use mapped value or 0
    }
  }

  if (digits.length < 3) {
    resultArea.innerHTML = "<div class='final-output'>❗ Please enter at least 3 valid characters.</div>";
    return;
  }

  const pyramid = buildPyramid(digits);
  showReducedOnly(pyramid, resultArea);
}

function showReducedOnly(pyramid, element) {
  const levelContainer = document.createElement("div");
  levelContainer.id = "pyramidContainer";

    // Reduced input digit sum
  const level1 = pyramid[0];
  const inputSum = level1.reduce((a, b) => a + b, 0);
   const sumText = document.createElement("div");
  sumText.className = "total-output";
  sumText.textContent = `🔢 Input Name Total: ${inputSum}`;
  element.appendChild(sumText);

  // Final two digits reduced
  const lastRowRaw = pyramid[pyramid.length - 1];
  const finalDigits = lastRowRaw.map(n => reduceToDigit(n));
  //const final = finalDigits.join('');
  const finalText = document.createElement("div");
  finalText.className = "final-output";
  finalText.textContent = `🎯 Pyramid Total: ${final}`;
  element.appendChild(finalText);


  // Toggle button
  const toggleBtn = document.createElement("div");
  toggleBtn.className = "toggle-btn";
  toggleBtn.textContent = "🔽 Show Pyramid";
  toggleBtn.onclick = () => {
    const rows = document.querySelectorAll(`#${levelContainer.id} .pyramid-level`);
    const visible = rows[0].style.display === "block";
    rows.forEach(r => r.style.display = visible ? "none" : "block");
    toggleBtn.textContent = visible ? "🔽 Show Pyramid" : "🔼 Hide Pyramid";
  };
  element.appendChild(toggleBtn);

  // ✅ Show all pyramid levels, including last row
  pyramid.forEach((level) => {
    const reduced = level.map(reduceToDigit);
    const reducedRow = document.createElement("div");
    reducedRow.className = "pyramid-level";
    reducedRow.style.display = "none";
    reducedRow.textContent = reduced.join(' ');
    levelContainer.appendChild(reducedRow);
  });

  element.appendChild(levelContainer);
}
=======
function reduceToDigit(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((a, b) => +a + +b, 0);
  }
  return n;
}

function buildPyramid(arr) {
  let levels = [arr];
  while (levels[levels.length - 1].length > 2) {
    const prev = levels[levels.length - 1];
    const next = [];
    for (let i = 0; i < prev.length - 1; i++) {
      next.push(prev[i] + prev[i + 1]); // no reduction here
    }
    levels.push(next);
  }
  return levels;
}

function handleUnified() {
  const input = document.getElementById("unifiedInput").value.toUpperCase().trim();
  const resultArea = document.getElementById("resultArea");
  resultArea.innerHTML = "";

  if (!input || input.length === 0) {
    resultArea.innerHTML = "<div class='final-output'>❌ Please enter something valid.</div>";
    return;
  }

  const charToNum = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
  };

  const digits = [];

  for (let ch of input) {
    if (/[0-9]/.test(ch)) {
      digits.push(parseInt(ch)); // keep digit
    } else if (/[A-Z]/.test(ch)) {
      digits.push(charToNum[ch] || 0); // use mapped value or 0
    }
  }

  if (digits.length < 3) {
    resultArea.innerHTML = "<div class='final-output'>❗ Please enter at least 3 valid characters.</div>";
    return;
  }

  const pyramid = buildPyramid(digits);
  showReducedOnly(pyramid, resultArea);
}

function showReducedOnly(pyramid, element) {
  const levelContainer = document.createElement("div");
  levelContainer.id = "pyramidContainer";

   // Reduced input digit sum
  const level1 = pyramid[0];
  const inputSum = level1.reduce((a, b) => a + b, 0);
  const sumText = document.createElement("div");
  sumText.className = "total-output";
  sumText.textContent = `🔢 Input Name Total: ${inputSum}`;
  element.appendChild(sumText);
  
  // Final two digits reduced
  const lastRowRaw = pyramid[pyramid.length - 1];
  const finalDigits = lastRowRaw.map(n => reduceToDigit(n));
  const final = finalDigits.join(' and ');
  const finalText = document.createElement("div");
  finalText.className = "final-output";
  finalText.textContent = `🎯 Pyramid Total: ${final}`;
  element.appendChild(finalText);

   // Toggle button
  const toggleBtn = document.createElement("div");
  toggleBtn.className = "toggle-btn";
  toggleBtn.textContent = "🔽 Show Pyramid";
  toggleBtn.onclick = () => {
    const rows = document.querySelectorAll(`#${levelContainer.id} .pyramid-level`);
    const visible = rows[0].style.display === "block";
    rows.forEach(r => r.style.display = visible ? "none" : "block");
    toggleBtn.textContent = visible ? "🔽 Show Pyramid" : "🔼 Hide Pyramid";
  };
  element.appendChild(toggleBtn);

  // ✅ Show all pyramid levels, including last row
  pyramid.forEach((level) => {
    const reduced = level.map(reduceToDigit);
    const reducedRow = document.createElement("div");
    reducedRow.className = "pyramid-level";
    reducedRow.style.display = "none";
    reducedRow.textContent = reduced.join(' ');
    levelContainer.appendChild(reducedRow);
  });

  element.appendChild(levelContainer);
}
>>>>>>> 0ccebd13c845088c4c1809ddea8ba916cf294bbc
