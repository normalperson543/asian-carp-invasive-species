const expandResourceButton = document.getElementById("expand-resource-button");
const expandResourceImg = document.getElementById("expand-resource-img");
const expandedResources = document.getElementById("expanded-resources");
const showCitationsCheckbox = document.getElementById("show-citations-checkbox");
let expanded = false;
expandResourceButton.addEventListener("click", toggleResources)
showCitationsCheckbox.addEventListener("change", toggleCitations)
document.onload = init();


function init() {
  expandLess();
  createCitations();
  showCitations();
}
function toggleResources() {
  if (expanded) {
    expandLess()
  }
  else {
    expandMore();
  }
}
function expandMore() {
  expandedResources.style.display = "block";
  expandResourceImg.src = "./assets/expand-less.svg"
  expandResourceImg.alt = "Expand less icon"
  expanded = true;
}
function expandLess() {
  expandedResources.style.display = "none";
  expandResourceImg.src = "./assets/expand-more.svg";
  expandResourceImg.alt = "Expand more icon"
  expanded = false;
}

// The HTML already has the citations baked in, just in case the JS doesn't load to comply with citation guidelines.
// We change these citations into references that the user can click to see the full citation.
function createCitations() {
  const citations = document.getElementsByClassName("citation");
  let expandCitationElement;
  for (let index = 0; index < citations.length; index++) {
    citations[index].innerHTML = "<div class='expand-citation' id='expand-citation-" + index + "' title='Expand this citation'><img src='./assets/quote.svg'/> <span class='expanded-citation' id='expanded-citation-" + index + "'>" + citations[index].innerText +"</span><img src='./assets/right.svg' id='citation-chevron-" + index +"'/></div>";
    expandCitationElement = document.getElementById("expand-citation-" + index);
    expandCitationElement.addEventListener("click", function () {toggleCitationStatus(index)});
    expandedCitationElement = document.getElementById("expanded-citation-" + index);
    expandedCitationElement.style.display = "none";
  }
}
function toggleCitationStatus(citationId) {
  expandCitation = document.getElementById("expand-citation-" + citationId);
  expandedCitation = document.getElementById("expanded-citation-" + citationId);
  citationChevron = document.getElementById("citation-chevron-" + citationId);
  if (expandedCitation.style.display == "inline-block") {
    expandedCitation.style.display = "none";
    expandCitation.title = "Expand this citation";
    citationChevron.src = "./assets/right.svg";
  }
  else if (expandedCitation.style.display == "none") {
    expandedCitation.style.display = "inline-block";
    expandCitation.title = "Unexpand this citation";
    citationChevron.src = "./assets/left.svg";
  }
}
function toggleCitations() {
  if (showCitationsCheckbox.checked) {
    showCitations();
  }
  else if (!(showCitationsCheckbox.checked)) {
    hideCitations();
  }
}
function showCitations() {
  const citations = document.getElementsByClassName("citation");
  let expandCitationElement;
  for (let index = 0; index < citations.length; index++) {
    expandCitation = document.getElementById("expand-citation-" + index);
    expandedCitation = document.getElementById("expanded-citation-" + index);
    citationChevron = document.getElementById("citation-chevron-" + index);
    expandedCitation.style.display = "inline-block";
    expandCitation.title = "Unexpand this citation";
    citationChevron.src = "./assets/left.svg";
  }
}
function hideCitations() {
  const citations = document.getElementsByClassName("citation");
  let expandCitationElement;
  for (let index = 0; index < citations.length; index++) {
    expandCitation = document.getElementById("expand-citation-" + index);
    expandedCitation = document.getElementById("expanded-citation-" + index);
    citationChevron = document.getElementById("citation-chevron-" + index);
    expandedCitation.style.display = "none";
    expandCitation.title = "Expand this citation";
    citationChevron.src = "./assets/right.svg";
  }
}