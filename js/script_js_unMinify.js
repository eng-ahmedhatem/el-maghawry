let loader = document.querySelector('.loding');
loader.classList.add('finish_loding');
document.body.style.overflowY = 'auto';
function writer() {
        const typedTextSpan = document.querySelector(".typed-text");
        typedTextSpan.innerHTML = ""
        const cursorSpan = document.querySelector(".cursor");
        const textArray = [
            "انضم لينا في  المغاوري للألوميتال  وحقق حلمك في مطبخ ألومنتال عصري وأنيق من  المغاوري للألوميتال . ليه تختار غيرنا؟",
            " المغاوري للألوميتال ، مطابخ تحقق لك الراحة والجمال اللي بتحلم بيه مع  المغاوري للألوميتال . احنا بنحول الحلم لحقيقة.",
            "معانا في  المغاوري للألوميتال  هتلاقي التصميم والجودة اللي بتدور عليها. خلي بيتك يشع بالأناقة.",
            "بنصنع لك مطبخ الأحلام بجودة عالية وسعر مناسب في  المغاوري للألوميتال . استثمر في راحتك.",
            "خلي مطبخك يشع بالأناقة والجمال مع  المغاوري للألوميتال . خلي الجمال يتحدث عن نفسه.",
            " المغاوري للألوميتال ، مطابخ تفصيل تناسب كل عروسة من  المغاوري للألوميتال . اهتمي بأدق التفاصيل.",
            "معانا في  المغاوري للألوميتال ، مطبخك بيبقى تحفة فنية في بيتك. خلي فن الطهي يبدأ من المطبخ.",
            "بنحقق لك حلمك في مطبخ عصري بأفضل الأسعار في  المغاوري للألوميتال . اجعل كل يوم تجربة مميزة.",
            "أبواب وشبابيك ألوميتال تزيد من أناقة بيتك مع  المغاوري للألوميتال . اعطي بيتك لمسة الفخامة.",
            " المغاوري للألوميتال  تمنحك الأمان والجودة في كل ركن. لأن الأمان يبدأ من هنا.",
            "معانا في  المغاوري للألوميتال  تقدر تختار التصميم اللي يناسب ذوقك. تميز ببيتك بشخصيتك.",
            "اجمع بين الأناقة والقوة في أعمال الخشمونيوم من  المغاوري للألوميتال . اختار اللي يجمع بين الذوق والمتانة.",
            "خليك مميز بأبواب وشبابيك خشمونيوم من  المغاوري للألوميتال . خلي بيتك يبهر الجميع.",
            "جودة عالية وتصميم رائع من  المغاوري للألوميتال . لأن الأناقة تبدأ من الأبواب.",
            "خلي حمامك يشع بالأناقة مع أبواب الألوميتال من  المغاوري للألوميتال . استمتع بجودة لا مثيل لها.",
            " المغاوري للألوميتال  تقدم لك جودة وأمان مع أبواب ألوميتال. خلي كل تفصيلة في بيتك تتحدث عن الفخامة.",
            "أبواب حمام تتحمل المياه والرطوبة بجدارة من  المغاوري للألوميتال . خلي كل ركن في بيتك يعكس الجودة.",
            "خلي حمامك قطعة فنية مع أبواب الخشمونيوم من  المغاوري للألوميتال . اهتم بأدق التفاصيل.",
            "إجمع بين الجمال والمتانة مع  المغاوري للألوميتال . استثمر في بيتك بحكمة.",
            "حمامك محتاج لأبواب خشمونيوم من  المغاوري للألوميتال . خلي حمامك يعكس فخامتك."
        ];
        const typingDelay = 0;
        const erasingDelay = 0;
        const newTextDelay = 3000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }
        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        return setTimeout(type, newTextDelay + 0)
    }
    writer()
    let hdr = document.querySelector('header')
    let nav_links = document.querySelectorAll('nav a')
    let fill_to_end = document.querySelector('.fill-to-end')
    let triangle = document.querySelector('.triangle')
    triangle.style.width = "10%"
    function ahmed() {
        const isScrolled = window.scrollY >= 1;
        console.log(hdr)
            hdr.classList.toggle("header_scroll", isScrolled);
            nav_links.forEach(ele => {
                ele.classList.toggle("nav_i_style_scroll", isScrolled);
            });

    }
    addEventListener("scroll", () => {
        ahmed()
        if (scrollY == 0) {
            nav_links.forEach(e => {
                e.classList.remove("nav_a_active_have")
                if (e.dataset.ls == "Home") {
                    e.classList.add("nav_a_active_have")
                }
            })
        }
        let scroll_Value_now = document.documentElement.scrollTop, height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let result = parseInt((scroll_Value_now / height) * 100)
        if (result <= 15) {
            triangle.style.width = parseInt(result * 7) + "%"
            if (result == 15) {
                result = 15
                triangle.style.width = 100 + "%"
            }
        }
    })
    const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                nav_links.forEach(e => {
                    e.classList.remove("nav_a_active_have")
                    if (e.dataset.ls == entrie.target.id) {
                        e.classList.remove("nav_a_active_have")
                        e.classList.add("nav_a_active_have")
                    }
                })
            }
        })
    }, {
        root: null,            // مراقبة منطقة الرؤية بأكملها
        rootMargin: '0px',     // لا هامش
        threshold: 0          // إطلاق الحدث عند تقاطع 50% من العنصر مع منطقة الرؤية
    }
    )
    document.querySelectorAll("section").forEach(section => {
        observer.observe(section)
    })
    let go_top = document.querySelector('.go_top')
    scrollY >= 50 ? go_top.style.opacity = "1" : go_top.style.opacity = "0"
    addEventListener("scroll", () => {
        scrollY >= 50 ? go_top.style.opacity = "1" : go_top.style.opacity = "0"
    })
    go_top.addEventListener("click", () => { scroll(0, 0) })
    function to_Top() {
        let scroll_Value_now = document.documentElement.scrollTop, height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let result = (scroll_Value_now / height) * 100
        document.querySelector(".fill-to-end").style.width = result + "%"
    }
    (function () { onscroll = function () { to_Top() } })()
    // to-filll-end
    // ************************* landing background ****************
    let bc = _ => {
        let bcLan = document.querySelector(".landing")
        let background = ["imgs/landin-1.jpg", "imgs/landin-2.jpg", "imgs/landin-3.jpg"]
        background.reverse()
        let i = 0
        setInterval(_ => {
            if (i === background.length) {
                i = 0
            }
            bcLan.style.cssText = `
            background-image: url(${background[i]});
            background-position: 100% 100%;
            `
            i++
        }, 8000)
    }
    // ************************* work ****************
    let li_act
    document.querySelectorAll(".taps li").forEach(e => {
        e.addEventListener("click", _ => {
            document.querySelectorAll(".taps li").forEach(ele => {
                ele.classList.remove("active__tab")
            })
            e.classList.add("active__tab")
            li_act = e
            fillter__tab(e.innerHTML)
        })
    })
    function fillter__tab(target = "مطابخ ألوميتال") {
        let all_tap_cont = document.querySelectorAll(".work .container .tap-cont")
        all_tap_cont.forEach(ele => {
            ele.classList.remove("scale-animation")
            if (ele.dataset.type == target) {
                ele.classList.add("scale-animation")
            }
        })
    }
    fillter__tab()