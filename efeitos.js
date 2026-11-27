// Faz os blocos aparecerem suavemente conforme a pessoa rola a página.
// Sem JavaScript, ou com "reduzir movimento" ativado, tudo fica visível normalmente.
(() => {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const alvos = document.querySelectorAll("main section:not(:first-child) :is(h2, article, ul > li, ol > li, details, dl)");
  const observador = new IntersectionObserver(
    (itens) => {
      itens.forEach((item) => {
        if (!item.isIntersecting) return;
        item.target.classList.add("visivel");
        observador.unobserve(item.target);
      });
    },
    { threshold: 0.1 },
  );

  alvos.forEach((el) => {
    el.classList.add("surgir");
    observador.observe(el);
  });
})();
