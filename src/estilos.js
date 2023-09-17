let tabHeaders = document.querySelectorAll('.tabheader');
let tabPages = document.querySelectorAll('.tabpage');

tabHeaders.forEach((tabheader, i) =>{
    tabheader.addEventListener('click',()=>{

        tabPages.forEach(tabpage =>{
            tabpage.style.display = 'none';
        });

        tabPages[i].style.display ='block';

        tabHeaders.forEach(header =>{
            header.classList.remove('active');
        } )
        tabheader.classList.add('active');
    })
    
} );

