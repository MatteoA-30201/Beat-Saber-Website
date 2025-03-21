const settingsImage = document.getElementById('settingsDisplay');

function changeSettings() {
  let imageSrc;
  const settingsId = ['left-settings', 'default-settings', 'right-settings'];
  // for (let i = 0; i < 2; i++) {
  //   switch (i) {
  //   case 0:
  //     if (settingsId[0] = document.getElementsByClassName('controller-settings-box').id) {
  //       imageSrc = "Photos/Left hand.JPG";
  //     };
  //     break;
  //   case 1:
  //     if (settingsId[1] = document.getElementsByClassName('controller-settings-box').id) {
  //       imageSrc = "Photos/Default.JPG";
  //     };
  //     break;
  //   case 2:
  //     if (settingsId[2] = document.getElementsByClassName('controller-settings-box').id) {
  //       imageSrc = "Photos/Right hand.JPG";
  //       console.log("Photos/Right hand.JPG");
  //     };
  //   }
  // }

        if (settingsId[0] = document.getElementsByClassName('controller-settings-box').id) {
        imageSrc = "Photos/Left hand.JPG";
        } else if (settingsId[1] = document.getElementsByClassName('controller-settings-box').id) {
        imageSrc = "Photos/Default.JPG";
        } else {
        imageSrc = "Photos/Right hand.JPG";
        }
  console.log("Photos/Left hand.JPG")
  settingsImage.src = imageSrc;
}

