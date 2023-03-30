const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style> 
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
</style>
<header>
    <script src=”https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js”></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script type=”text/javascript” src=”https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js”></script>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand nav-link active" href="https://ashassins.github.io/">Ashassins</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Fun</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="resume.html">Resume</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                </ul>
                <div>
                    <button class="btn btn-primary" onclick="location.href='contact.html'">Contact me</button>
                    <!-- <button class="btn btn-outline-primary" type="submit">Signup</button> -->
                </div>
            </div>
        </div>
    </nav>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);