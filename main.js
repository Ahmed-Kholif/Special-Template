//Start Links

let floatLinks = document.querySelector( "header .main-nav .mega-menu .float-links" );

let floatLi = document.querySelector( "header .main-nav .mega-menu" );

floatLi.addEventListener( "click", ( e ) => {

    floatLinks.classList.toggle( "active" );

    floatLi.classList.toggle( "active" );

} );



//End Links

//Start Skills

let skillsSec = document.querySelector( ".skills" );

let skillsSpans = document.querySelectorAll( ".skills .skill .holder span" );

window.addEventListener( "scroll", () => {

    if ( window.scrollY >= skillsSec.offsetTop )
    {

        skillsSpans.forEach( span => {

            span.style.width = span.getAttribute( "width" );

        } );

        document.querySelectorAll( ".skills .skill h2" ).forEach( h => {

            h.classList.add( "scrolled" );

        } );

    };
} );

//End Skills

// Start Status

let statusSec = document.querySelector( ".stats" );

let goals = document.querySelectorAll( ".stats .stat h2" );

let started = false;

window.onscroll = () => {

    if (window.scrollY >= statusSec.offsetTop) {

        if (!started) {

            goals.forEach( h => Counting( h ) );

        }
        started = true;
    }
}

function Counting(el) {

    let goal = el.dataset.goal;

    let setCount = setInterval( () => {

        el.innerText++

        if (el.innerText === goal) {

            clearInterval( setCount );

        }
    }, 2000 / goal );
}

// End Status