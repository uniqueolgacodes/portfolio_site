/*=== RESIZE NAVBAR ON SCROLL ===*/
var navbar = document.querySelector(".navbar");
//When the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};


// ===SKILLS ANIMATION===
const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", ()=>{
        // checkScroll(skills_wrap);
        skillsEffect();
      })
      //every time we scroll checking, we exceeded the about-skills or not
      function checkScroll(el){
        //getting the top position of about-skills relative to view port, in other words, we need to get amount of pixels between about-skills and the top edge of the window.
        let rect = el.getBoundingClientRect();
        // console.log(rect.top);
        // console.log(window.innerHeight);

        //after knowing the amount of pixels between the top edge of about skills and top edge of window, now we will check if we exceeded the bottom edge of about skills or not
        //window's height >= element's top position+element's height
        if(window.innerHeight >= rect.top + el.offsetHeight) return true;
        return false;
        // {
        //     console.log("Hello");
        // }
      }
      function skillsEffect(){
        if(!checkScroll(skills_wrap)) return;
        skills_bar.forEach((skill)=>(skill.style.width = skill.dataset.progress))
      };
      /* === PORTFOLIO ITEM FILTER ===*/
      const FilterContainer = document.querySelector(".portfolio-filter"),
            filterBtns = FilterContainer.children;
            console.log(filterBtns);
            totalFilterBtn = filterBtns.length;
            PortfolioItems = document.querySelectorAll(".portfolio-item"),totalportfolioItem = PortfolioItems.length;
            // console.log(totalportfolioItem)
            for(let i=0; i < totalFilterBtn; i++){
              (filterBtns[i]).addEventListener("click",function(){
                // console.log(this.innerHTML)
                FilterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                const filterValue = this.getAttribute("data-filter")
                // console.log(filterValue)
                for( let k=0; k < totalportfolioItem; k++){
                  if(filterValue === PortfolioItems[k].getAttribute("data-category")){
                    PortfolioItems[k].classList.remove("hide");
                    PortfolioItems[k].classList.add("show");
                  }
                  else{
                    PortfolioItems[k].classList.remove("show");
                    PortfolioItems[k].classList.add("hide");
                  }
                  if(filterValue === "all"){
                    PortfolioItems[k].classList.remove("hide");
                    PortfolioItems[k].classList.add("show");
                  }
                }
              })
            }
            /* === LIGHTBOX ===*/
            const lightbox = document.querySelector(".lightbox"),
                  lightboxImg = lightbox.querySelector(".lightbox-img"),
                  lightboxClose = lightbox.querySelector(".lightbox-close"),
                  lightboxText = lightbox.querySelector(".caption-text"),
                  lightboxCounter = lightbox.querySelector(".caption-counter");
                  let itemIndex = 0;
                  for(let i=0; i<totalportfolioItem; i++){
                    (PortfolioItems[i]).addEventListener("click", function(){
                      itemIndex=i;
                      changeItem();
                      toggleLightbox();
                    })
                  }
                  function nextItem(){
                    if(itemIndex == totalportfolioItem-1){
                      itemIndex=0;
                    }
                    else{
                      itemIndex++
                    }
                    changeItem();
                  };
                  function prevItem(){
                    if(itemIndex == 0){
                      itemIndex = totalportfolioItem-1;
                    }
                    else{
                      itemIndex--
                    }
                    changeItem();
                  };
                  
                  // function nextKey(){ 
                  //   (nextItem).addEventListener("onkeydown", nextItem())
                  // };#TO BE WORKED ON
                  function toggleLightbox(){
                    lightbox.classList.toggle("open")
                  }
                  function changeItem(){
                    imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
                    lightboxImg.src = imgSrc;
                    lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
                    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
                  }
                  //close lightbox
                  lightbox.addEventListener("click", function(event){
                    if(event.target === lightboxClose || event.target === lightbox){
                      toggleLightbox();
                    }
                  })












/* === CODE TO ADD NEW CLASS TO CSS ===
function changeCSS(typeAndClass, newRule, newValue)
{
    var thisCSS=document.styleSheets[0]
    var ruleSearch=thisCSS.cssRules? thisCSS.cssRules: thisCSS.rules
    for (i=0; i<ruleSearch.length; i++)
    {
        if(ruleSearch[i].selectorText==typeAndClass)
        {
            var target=ruleSearch[i]
            break;
        }
    }
    target.style[newRule] = newValue;
}

changeCSS("h4.icontitle","backgroundColor", "green");

=== TO CHANGE THE STYLE OF A HTML ELEMENT===
document.getElementById(id).style.property = new style
E.G document.getElementById("p2").style.color = "blue";

===WITH EVENT LISTENERS===
onclick="document.getElementById('id1').style.color = 'red'"
*/