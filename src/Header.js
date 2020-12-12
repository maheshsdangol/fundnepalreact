import React from 'react'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-grey">
                <a class="navbar-brand" href="#S">Fund Nepal</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#s">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#s">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#s">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#s">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
