const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style> 
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
</style>
    <script src=”https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js”></script>
    <script type=”text/javascript” src=”https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js”></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <div class="container">
        <footer class="py-5">
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Ashassins. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="https://www.instagram.com/ashassins.ai/"><i class="bi bi-instagram" style="font-size: 2rem; color:mediumaquamarine"></i></a></li>
            <li class="ms-3"><a class="link-dark" href="https://github.com/Ashassins"><i class="bi bi-github" style="font-size: 2rem; color:mediumaquamarine"></i></a></li>
            <li class="ms-3"><a class="link-dark" href="https://www.linkedin.com/in/ashassins/"><i class="bi bi-linkedin" style="font-size: 2rem; color:mediumaquamarine"></i></a></li>
            </ul>
        </div>
        </footer>
    </div>
    <script src="./Footers · Bootstrap v5.3_files/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);