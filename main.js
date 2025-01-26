let val=0;
const total=document.getElementById('total');
function calculate(input, outputElement, value) {
  outputElement.textContent = input.value * value;
  val=0;
  elements.forEach(({ inputId, outputId, value }) => {
    const inputElement = document.getElementById(inputId);
    val+=inputElement.value*value;
  });
  total.textContent=val;

}

const elements = [
  { inputId: 'one', outputId: 'two_thousand_note', value: 2000 },
  { inputId: 'two', outputId: 'five_hundred_note', value: 500 },
  { inputId: 'three', outputId: 'two_hundred_note', value: 200 },
  { inputId: 'four', outputId: 'one_hundred_note', value: 100 },
  { inputId: 'five', outputId: 'fifty_note', value: 50 },
  { inputId: 'six', outputId: 'twenty_note', value: 20 },
  { inputId: 'seven', outputId: 'ten_note', value: 10 },
  { inputId: 'eight', outputId: 'five_note', value: 5 },
  { inputId: 'nine', outputId: 'two_note', value: 2 },
  { inputId: 'ten', outputId: 'one_note', value: 1 },
];

elements.forEach(({ inputId, outputId, value }) => {
  const inputElement = document.getElementById(inputId);
  const outputElement = document.getElementById(outputId);

  if (inputElement && outputElement) {
    inputElement.addEventListener('input', () => calculate(inputElement, outputElement, value));
  }
});

function reset() {
  // Tab to edit
  elements.forEach(({ inputId, outputId, value }) => {
  const inputElement = document.getElementById(inputId);
  const outputElement = document.getElementById(outputId);
  inputElement.value='';
  outputElement.textContent=0;
  total.textContent=0;
  val=0;
  });
}