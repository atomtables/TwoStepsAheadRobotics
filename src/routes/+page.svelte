<script>
    import { base } from '$app/paths';

    let people = [
        {
            firstName: "Diptanshu",
            lastName: "Halder",
            role: "Team Captain",
            image: "./team/diptanshuhalder.png"
        },
        {
            firstName: "Adithiya",
            lastName: "Venkatakrishnan",
            role: "Electrical & Programming Lead",
            image: "./team/adithiyavenkatakrishnan.png"
        },
        {
            firstName: "Lohitaksh",
            lastName: "Arige",
            role: "Hardware Lead",
            image: "./team/lohitaksharige.png"
        },
        {
            firstName: "Sanvi",
            lastName: "Walke",
            role: "CAD Lead",
            image: "./team/sanviwalke.png"
        },
        {
            firstName: "Vishnupriya",
            lastName: "Jayabalaji",
            role: "Outreach Lead",
            image: "./team/vishnupriyajayabalaji.png"
        },
        {
            firstName: "Avika",
            lastName: "Sharma",
            role: "Recruitment Manager",
            image: "./team/avikasharma.png"
        },
        {
            firstName: "Isha",
            lastName: "Kanodia",
            role: "Marketing Lead",
            image: "./team/ishakanodia.png"
        },
    ]
</script>

<div class="navbar bg-primary text-primary-content fixed z-50">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
            </div>
            <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="#main">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#ourteam">Our Team</a></li>
                <li><a href="#sponsors">Sponsor Kit</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost text-xl" href="{base}/#main">Two Steps Ahead</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="#main">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#ourteam">Our Team</a></li>
            <li><a href="#sponsors">Sponsor Kit</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn btn-accent rounded-2xl" href="https://docs.google.com/forms/d/e/1FAIpQLSecIavfHjLfzPW8LwJ7kLwPxfqToHNaHzr6P0ak8c20i7ky3Q/viewform">Join Us</a>
    </div>
</div>

<div id="main"
     class="hero min-h-screen"
     style="background-image: url({base}/main_back.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
        <div class="max-w-3xl">
            <h1 class="mb-5 text-8xl font-bold">Two Steps Ahead</h1>
            <p class="mb-5 text-3xl">
                We are Team #10600 of passionate engineering students competing in the FIRST Robotics Competition.
            </p>
            <button class="btn text-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSecIavfHjLfzPW8LwJ7kLwPxfqToHNaHzr6P0ak8c20i7ky3Q/viewform">Join Our Team</a></button>
            <button class="btn btn-primary text-xl"><a href="#aboutus">Learn More About Us</a></button>
        </div>
    </div>
</div>

<div id="aboutus" class="relative bottom-[64px]"></div>
<div class="bg-base-300 p-5">
    <div class="card flex md:card-side bg-accent shadow-xl p-2 rounded-2xl">
        <figure class="flex-shrink-0 w-full md:w-1/3">
            <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                    class="rounded-2xl md:rounded-none w-full h-full object-cover"
                    style="height: 100%; max-height: 500px;"
            />
        </figure>
        <div class="card-body bg-neutral text-neutral-content px-5 py-5 bg0 mt-2 rounded-2xl md:mt-0 md:rounded-none md:rounded-e-2xl">
            <h2 class="card-title text-4xl md:text-6xl mb-2">Who are we?</h2>
            <p class="lg:text-lg xl:text-xl 2xl:text-2xl">We are a group of passionate engineering sophomores, FRC Team
                #10600, from
                the region
                around Middlesex County, New Jersey. Our interests are to introduce and cultivate robotics into the
                technology
                and people around us, and to use robotics to better our society. We aim to inspire a love for
                technology and engineering in our community and the next generations.
                <br><br>
                Our interests are to give back to our community, hosting workshops, mentoring younger students, and
                partnering with local organisations.
                At Team #10600, we work together to make a difference in our region and the larger world, proving that
                the skills that we learn
                in robotics today will drive meaningful change tomorrow.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary text-2xl">Join our Team</button>
            </div>
        </div>
    </div>
</div>

<div id="ourteam" class="relative bottom-[64px]"></div>
<div class="bg-base-300 p-5">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-10 ">Our Team Leads</h2>
    <div class="flex flex-wrap justify-center">
        {#each people as person}
            <div class="card card-side bg-base-100 hover:bg-primary transition-all shadow-xl px-3 m-4 lg:w-auto w-full rounded-3xl">
                <figure class="avatar flex-shrink-0 p-3">
                    <div class="ring-primary ring-offset-base-100 w-24 h-24 md:w-36 md:h-36 rounded-full ring ring-offset-2">
                        <img
                                src="{person.image}"
                                alt="Movie"/>
                    </div>
                </figure>
                <div class="card-body p-0 px-2 flex justify-center">
                    <h2 class="card-title text-3xl sm:text-4xl">{person.firstName} {person.lastName}</h2>
                    <div class="text-xl sm:text-3xl">{person.role}</div>
                </div>
            </div>
        {/each}
    </div>
</div>

<div id="sponsors" class="relative bottom-[64px]"></div>
<div class="bg-base-100 p-5">
    <div class="bg-base-100 max-w-6xl m-auto">
        <div class="card flex max-lg:flex-col-reverse lg:card-side bg-accent shadow-xl p-5 rounded-2xl">
            <div class="card-body bg-neutral text-neutral-content px-5 py-5 bg0 mt-2 rounded-2xl lg:mt-0 lg:rounded-none lg:rounded-2xl">
                <h2 class="card-title text-5xl xl:text-6xl mb-2">Become one of our sponsors!</h2>
                <p class="lg:text-lg xl:text-xl 2xl:text-2xl">By supporting FRC Team #10600, you help us on our path
                    towards.
                    competitions, community help, and communal workshops.
                    Your assistance will help us cover the price of supplies and resources that we need, making STEM
                    more accessible to everyone. Help us shape engineering and technology's future while encouraging
                    students to engage in experiential learning.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-2xl"><a href="./FRC%20Sponsorship%20Packet%20Team%2010600%20TWO%20STEPS%20AHEAD.pdf">Download our Sponsor Packet</a></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="contact" class="relative bottom-[64px]"></div>
<div
        class="hero"
        style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
        <div class="p-10">
            <h1 class="mb-5 text-8xl font-bold">Two Steps Ahead</h1>
            <button class="btn btn-primary btn-lg rounded-full ml-3 mr-2"><a href="mailto:twostepsaheadrobotics@gmail.com">Contact
                Us</a></button>
            <button class="btn btn-accent btn-lg rounded-full mr-3"><a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSecIavfHjLfzPW8LwJ7kLwPxfqToHNaHzr6P0ak8c20i7ky3Q/viewform">Join
                Us</a></button>
        </div>
    </div>
</div>

<footer class="footer bg-base-200 text-base-content p-10 pb-5">
    <nav>
        <a class="link link-hover" href="#aboutus">About Us</a>
        <a class="link link-hover" href="#ourteam">Our Team</a>
        <a class="link link-hover" href="#sponsors">Sponsor Kit</a>
        <a class="link link-hover" href="#contact">Contact Us</a>
    </nav>
    <nav>
        <h6 class="footer-title m-0 p-0">Contact Information</h6>
        <a class="link link-hover" href="mailto:twostepsaheadrobotics@gmail.com">twostepsaheadrobotics@gmail.com</a>
        <a class="link link-hover" href="https://docs.google.com/forms/d/e/1FAIpQLSecIavfHjLfzPW8LwJ7kLwPxfqToHNaHzr6P0ak8c20i7ky3Q/viewform">Recruitment Form</a>
        <a class="link link-hover" href="./FRC%20Sponsorship%20Packet%20Team%2010600%20TWO%20STEPS%20AHEAD.pdf">Sponsor Kit PDF</a>
    </nav>
    <nav></nav>
    <nav></nav>
</footer>
<footer class="footer bg-base-200 text-base-content border-base-content border-t px-10 py-4">
    <aside class="grid-flow-col items-center">
        <svg fill="#FFFFFF" height="36px" width="36px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 211.98 211.98" xml:space="preserve">
            <path d="M98.801,170.532c3.78,15.666,4.068,21.943,1.338,29.203c-2.882,7.662-11.762,10.423-13.31,10.852
                c-0.905,0.311-4.38,1.394-8.789,1.394c-8.531,0-15.295-4.126-19.046-11.619c-2.849-5.692-4.532-10.611-6.16-15.369
                c-2.525-7.381-5.136-15.012-12.396-26.589c-2.744-4.376-4.996-7.876-6.983-10.964c-6.797-10.565-9.899-15.388-15.085-28.132
                C13.609,107.604,7.928,92.085,7.904,84.621c-0.016-4.856,1.562-7.46,2.887-8.79c0.764-0.765,1.65-1.326,2.598-1.655
                c0.037-2.762,1.033-5.307,3.513-7.105c1.245-0.903,2.496-1.548,3.742-1.931c-0.26-1.953-0.216-4.082,0.526-6.023
                c0.844-2.207,2.454-3.862,4.655-4.785c1.073-0.45,2.114-0.744,3.108-0.879c0.144-1.781,0.588-3.579,1.54-5.15
                c1.257-2.074,3.211-3.474,5.651-4.047c2.044-0.481,4.026-0.486,5.668-0.105c0.436-1.77,1.183-3.568,2.417-5.156
                c1.523-1.961,4.412-4.352,9.521-4.61c13.869-0.709,16.444,11.901,17.408,16.559c0.467,2.259,0.521,4.555,0.575,6.774
                c0.066,2.761,0.129,5.368,0.986,6.933c0.445,0.813,1.099,1.888,1.855,3.133c2.771,4.56,6.96,11.451,8.617,18.197
                c1.04,4.235,0.025,10.329-1.259,18.044c-1.478,8.879-3.152,18.941-1.557,26.584c1.439,6.897,5.021,12.867,8.812,19.187
                C92.975,156.135,96.908,162.692,98.801,170.532z M203.965,44.77c-0.696-6.303-3.762-9.102-6.629-9.755
                c-0.349-2.741-1.626-5.159-4.294-6.666c-1.336-0.755-2.654-1.255-3.938-1.494c0.037-1.971-0.247-4.082-1.204-5.927
                c-1.088-2.099-2.875-3.561-5.166-4.229c-1.118-0.326-2.189-0.502-3.188-0.522c-0.344-1.754-0.989-3.489-2.112-4.942
                c-1.483-1.919-3.583-3.088-6.072-3.382c-2.14-0.254-4.082-0.021-5.647,0.527c-0.594-1.6-1.462-3.194-2.726-4.571
                C160.703,1.317,157.529,0,153.812,0c-0.344,0-0.696,0.012-1.06,0.034c-13.831,0.869-14.988,13.621-15.424,18.421
                c-0.209,2.297-0.004,4.585,0.194,6.798c0.246,2.749,0.479,5.347-0.196,6.997c-0.352,0.858-0.879,2.001-1.49,3.324
                c-2.238,4.844-5.62,12.164-6.504,19.054c-0.547,4.264,0.943,10.258,2.829,17.846c2.178,8.764,4.646,18.695,3.92,26.523
                c-0.658,7.096-3.298,13.384-6.092,20.041c-2.773,6.609-5.642,13.443-6.626,21.367c-1.985,15.994-1.562,22.265,1.973,29.168
                c3.732,7.294,12.879,9.029,14.455,9.277c0.683,0.149,2.848,0.567,5.715,0.567c10.127,0,17.507-4.927,20.782-13.873
                c2.188-5.979,3.303-11.057,4.383-15.969c1.674-7.618,3.405-15.496,9.31-27.818c2.232-4.659,4.074-8.393,5.7-11.687
                c5.56-11.266,8.097-16.407,11.807-29.654C200.896,68.25,204.786,52.188,203.965,44.77z"/>
        </svg>
        <p>
            Two Steps Ahead Robotics
            <br />
            FRC Team #10600
        </p>
    </aside>
</footer>