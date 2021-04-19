const ArriveArea=
{
    "toku":["大学高専下","高専正門"],
    "kusi":["大学高専下","高専正門"],
    "sakasita":["徳山駅前", "櫛ケ浜駅前"],
    "seimon":["徳山駅前","櫛ケ浜駅前"]
};


function createMenu(selectGenre){
    let menuList = document.getElementById('arrive');
    menuList.disabled = false;
    menuList.innerHTML = '';
    let option = document.createElement('option');
    option.innerHTML = '到着場所を選択してください';
    option.defaultSelected = true;
    option.disabled = true;
    menuList.appendChild(option);
    ArriveArea[selectGenre].forEach( menu => {
        let option = document.createElement('option');
        option.innerHTML = menu;
        menuList.appendChild(option);
    });
  }