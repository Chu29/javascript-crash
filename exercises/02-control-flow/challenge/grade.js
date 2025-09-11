const grade = (score) => {
  if (score >= 86) {
    console.log("Grade = A");
  } else if (score >= 76 && score <= 85) {
    console.log("Grade = B");
  } else if (score >= 65 && score <= 75) {
    console.log("Grade = C");
  }
};

grade(76);
