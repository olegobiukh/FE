'use strict';

// s-red
            function redImg(elem) {
                    elem.src = "./images/s-red.png";
                    elem.style.height = "134px";
                    elem.style.width = "102px";
                }

                function normalImg(elem) {
                   elem.src = "./images/s.png";
                   elem.style.height = "134px";
                   elem.style.width = "102px";
                }

                // menu
            const menu = document.getElementById('menu');
                function getInitial(initialItem, show) {
                        if(show) {
                            initialItem.childNodes[1].classList.add('active__line');
                            initialItem.childNodes[1].classList.remove('navigation__line');
                            initialItem.childNodes[0].textContent = initialItem.dataset.order;
                            initialItem.childNodes[1].textContent = initialItem.dataset.title;
                        } else {
                            initialItem.childNodes[1].classList.remove('active__line');
                            initialItem.childNodes[1].classList.add('navigation__line');
                            initialItem.childNodes[0].textContent = "";
                            initialItem.childNodes[1].textContent = "";
                        }
                    }

                getInitial(menu.firstElementChild, true);

                

                let selectedItem;

                menu.onclick = function (event) {
                    getInitial(menu.firstElementChild, false);
                    let target = event.target;
                   
                    while (target != this) {
                        if (target.tagName == 'LI') {
                            getActive(target);
                            return;
                        }
                        target = target.parentNode;
                    }
                }

                function getActive(node) {

                    if (selectedItem) {
                        selectedItem.childNodes[1].classList.add('navigation__line');
                        selectedItem.childNodes[1].classList.remove('active__line');
                        selectedItem.childNodes[0].textContent = "";
                        selectedItem.childNodes[1].textContent = "";
                        
                    }
                    selectedItem = node;
                    selectedItem.childNodes[1].classList.remove('navigation__line');
                    selectedItem.childNodes[1].classList.add('active__line');
                    selectedItem.childNodes[0].textContent = node.dataset.order;
                    selectedItem.childNodes[1].textContent = node.dataset.title;
                  
                }