document.addEventListener("DOMContentLoaded", function () {

    //открытие и закрытие мобильного меню
    document.querySelectorAll('.app').forEach(function (app) {
        app.addEventListener('click', function (event) {
            const sidebar = document.querySelector(".sidebar");
            const isSidebarOpen = sidebar.classList.contains("sidebar__mb-open");

            const openMBtn = document.querySelector(".navbar__mb-btn-open-sidebar");
            const closeMBtn = document.querySelector(".sidebar__mb-btn-close-sidebar");

            const target = event.target;

            console.log(closeMBtn.contains(target));
            if ((isSidebarOpen && !sidebar.contains(target)) //попала по правому пространству
                || (!isSidebarOpen && openMBtn.contains(target)) //попала по мобильному меню
                || (isSidebarOpen && closeMBtn.contains(target))) { //попала по кнопке закрыть
                sidebar.classList.toggle('sidebar__mb-open')
            }
        });
    });

    // //закрытие мобильного меню
    // document.querySelectorAll('.sidebar__mb-btn-close-sidebar').forEach(function (mbMenuBtn) {
    //     mbMenuBtn.addEventListener('click', function () {
    //         document.querySelectorAll('.sidebar').forEach(function (sidebar) {
    //             sidebar.classList.toggle('sidebar__mb-open')
    //         })
    //     })
    // });

    //открытие меню филиалов
    document.querySelectorAll('.sidebar__current-filial').forEach(function (chooseFilialBtn) {
        chooseFilialBtn.addEventListener('click', function () {
            chooseFilialBtn.classList.toggle('sidebar__current-filial_dark');
            document.querySelectorAll('.choose-filial-arrow').forEach(function (filialsbtn) {
                filialsbtn.classList.toggle('sidebar__btn-show-choose-filial')
            });
            document.querySelectorAll('.sidebar__choose-filial').forEach(function (filialmenu) {
                filialmenu.classList.toggle('sidebar__choose-filial-show')
            })
        })
    })
});
