const modal = $("#bsModal");

modal.on("show.bs.modal", function() {
  modal.removeClass("leave");
  modal.addClass("animate");
});

modal.on("hide.bs.modal", function() {
  modal.removeClass("animate");
  modal.addClass("leave");
});
