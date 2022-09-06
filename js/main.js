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