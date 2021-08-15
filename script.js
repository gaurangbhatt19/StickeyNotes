var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

var checkicon = document.getElementById("check_icon");
var xicon = document.getElementById("x_icon");
var i = 0;

xicon.addEventListener("click", () => {
  typeNote();
});
checkicon.addEventListener("click", () => {
  createNote();
});
var typeNote = () => {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
};

var createNote = () => {
  let noteText = document.getElementById("note_text").value;
  var note = document.createElement("div");

  note.setAttribute("id", "notes");

  var text = document.createElement("h1");
  text.innerHTML = noteText;
  text.setAttribute(
    "style",
    "width:250px;height:250px;font-size:26px;padding: 25px; margin-top: 10px;overflow: hidden;box-shadow: 0px 10px 24px rgba(0,0,0,0.75)"
  );

  text.style.margin = margin();
  text.style.transform = rotate();
  text.style.background = color();

  note.appendChild(text);
  console.log(note);
  container2.insertAdjacentElement("beforeend", note);

  note.addEventListener("mouseenter", () => {
    note.style.transform = "scale(1.1)";
  });

  note.addEventListener("mouseleave", () => {
    note.style.transform = "scale(1)";
  });

  note.addEventListener("dblclick", () => {
    note.remove();
  });

  document.getElementById("note_text").value = "";
};
var margin = () => {
  let random_margin = ["-5px", "1px", "5px", "10px", "20px", "15px"];
  let index = Math.floor(Math.random() * random_margin.length);
  return random_margin[index];
};
var rotate = () => {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-5deg)",
    "rotate(-1deg)",
    "rotate(-10deg)",
  ];
  let index = Math.floor(Math.random() * random_rotate.length);
  return random_rotate[index];
};
var color = () => {
  let color_array = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  if (i > color_array.length - 1) {
    i = 0;
  }
  console.log(color_array[i++]);
  return color_array[i++];
};
