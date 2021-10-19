const buttons = document.querySelectorAll(".servicesCategories span");

buttons.forEach(function (button) {
  const serviceId = button.getAttribute("data-opens");
  button.addEventListener("click", function () {
    hideAllServices();
    const service = document.getElementById(serviceId);
    service.style.display = "block";
    button.setAttribute("class", "activeCategory");
  });
});

function hideAllServices() {
  const services = document.querySelectorAll(".serviceInformation");
  services.forEach(function (service) {
    service.style.display = "none";
    const button = document.querySelector('[data-opens="' + service.id + '"]');
    button.setAttribute("class", "");
  });
}
