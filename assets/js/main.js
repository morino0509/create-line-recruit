

// RECRUIT タブ

const tabs = document.querySelectorAll(".recruit-tab");
const contents = document.querySelectorAll(".recruit-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    // すべてのタブからactiveを外す
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    // クリックしたタブにactiveをつける
    tab.classList.add("is-active");


    // すべてのコンテンツを隠す
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });


    // data-targetと同じidのコンテンツを表示
    const target = tab.dataset.target;

    document
      .getElementById(target)
      .classList.add("is-active");

  });
});







// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // 今クリックした質問がすでに開いているか
    const isOpen = item.classList.contains("is-open");

    // いったん全部閉じる
    faqItems.forEach((faq) => {
      faq.classList.remove("is-open");
    });

    // 閉じていた場合だけ開く
    if (!isOpen) {
      item.classList.add("is-open");
    }

  });
});

