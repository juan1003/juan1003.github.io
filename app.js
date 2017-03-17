var tabs = Array.from(document.getElementsByClassName('navigation-tabs__link'));


for(var i = 0; i < tabs.length; i++ ){
  tabs[i].onclick = function (i) {
    return display(i.target.innerText);
  };
}

function display(tabId) {
  var sections = Array.from(document.getElementsByTagName('section'));
  for(var i = 0; i < sections.length; i++ ){
    if(sections[i].id == tabId){
      sections[i].style.display = 'block';
    }
    else {
      sections[i].style.display = 'none';
    }
  }
}
