/* eslint-disable */
const dancers = [];

function handleClickDancerButton () {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
  * A new object of the given type will be created and added
  * to the stage.
  */
 let dancer = new BlinkyDancerClass(
  document.body.clientHeight * Math.random(),
  document.body.clientWidth * Math.random(),
  Math.random() * 1000
);
// dancers.push(dancer);
// dancer.render(document.body)
document.body.appendChild(dancer.$node);


}
window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
