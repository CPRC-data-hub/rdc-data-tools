// Builds the tool cards from window.TOOLS (assets/js/tools.js). No edits needed here.
(function () {
  var COLORS = {
    purple: "#49497F", turquoise: "#64DAE6", orange: "#F4AF40",
    lime: "#9FD75C", coral: "#FC7559", peony: "#F876FF"
  };
  var tools = (window.TOOLS || []).slice().sort(function (a, b) {
    return (b.updated || "").localeCompare(a.updated || "");
  });

  var grid = document.getElementById("tool-grid");
  var search = document.getElementById("search");
  var topicSelect = document.getElementById("topic");
  var count = document.getElementById("result-count");

  // Topic dropdown
  var topics = {};
  tools.forEach(function (t) { (t.topics || []).forEach(function (x) { topics[x] = true; }); });
  Object.keys(topics).sort().forEach(function (x) {
    var o = document.createElement("option");
    o.value = x; o.textContent = x;
    topicSelect.appendChild(o);
  });

  function formatDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T12:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function render() {
    var q = search.value.trim().toLowerCase();
    var topic = topicSelect.value;
    var shown = tools.filter(function (t) {
      var hay = (t.title + " " + t.description + " " + (t.topics || []).join(" ")).toLowerCase();
      return (!q || hay.indexOf(q) !== -1) && (!topic || (t.topics || []).indexOf(topic) !== -1);
    });

    grid.innerHTML = "";
    shown.forEach(function (t) {
      var li = el("li", "tool-card");
      var stripe = el("div", "stripe");
      stripe.style.background = COLORS[t.color] || COLORS.purple;
      li.appendChild(stripe);

      var body = el("div", "body");
      var h3 = el("h3");
      var a = el("a", null, t.title);
      a.href = t.url;
      h3.appendChild(a);
      body.appendChild(h3);
      body.appendChild(el("p", null, t.description));

      var meta = el("div", "meta");
      (t.topics || []).forEach(function (x) { meta.appendChild(el("span", "tag", x)); });
      if (t.updated) meta.appendChild(el("span", "updated", "Updated " + formatDate(t.updated)));
      body.appendChild(meta);

      li.appendChild(body);
      grid.appendChild(li);
    });

    count.textContent = shown.length === tools.length
      ? tools.length + (tools.length === 1 ? " tool" : " tools")
      : shown.length + " of " + tools.length + " tools";
    if (!shown.length) grid.appendChild(el("li", "empty", "No tools match your search."));
  }

  search.addEventListener("input", render);
  topicSelect.addEventListener("change", render);
  render();
})();
