<main class="main-cv row" id="main_cv">
    <div class="col-12">
        <div class="row h-100 invisible-xs">
            <div class="col-3 border-menu-info">
                <div class="row row-menu-info">
                    <!-- Menu + Info -->
                    <div class="col-menu-info">
                        <!-- Menu -->
                        <div class="row row-menu">
                            <ul class="ul-menu">
                                <li><a href="#" class="menu-about menu-active" id="about" title="Description personnelle">À propos</a></li>
                                <li><a href="#" class="menu-education" id="education" title="Mes différentes formations">Formations</a></li>
                                <li><a href="#" class="menu-experiences" id="experience" title="Toutes mes expériences">Expériences</a></li>
                                <li><a href="#" class="menu-skills" id="skills" title="Mes différentes compétences">Compétences</a></li>
                            </ul>
                        </div>
                        <!-- Contact -->
                        <div class="row row-info">
                            <ul class="ul-info">
                                <li><span>axel.ndc@gmail.com</span></li>
                                <li><span>+33 6 22 12 43 57</span></li>
                                <li><span>6 rue berryer</span></li>
                                <li><span>80080 - Amiens</span></li>
                                <ul class="ul-info-icon-link">
                                    <li><a href="https://www.linkedin.com/in/axel-noir-de-chazournes-1356a2187/" target="_blank" class="fa fa-linkedin" title="Linkedin"></a></li>
                                    <li><a href="https://github.com/tetronitte" target="_blank" class="fa fa-github" title="Github"></a></li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container du cv -->
            <div class="col-9 cv-container">
                <?php include('section_cv.php'); ?>
            </div>
        </div>
        <!-- Container du cv en xs-->
        <div class="row visible-xs">
            <?php include('section_cv.php'); ?>
        </div>
        <div class="row menu-icon visible-xs">
            <ul class="ul-menu-icon col-12">
                <div class="row-fluid row-menu-icon">
                    <div class="col-3 menu-icon-bg border border-light">
                        <li><a href="#" class="fa fa-user" id="about_icon" title="A propos"></a></li>
                    </div>
                    <div class="col-3 menu-icon-bg border border-light">
                        <li><a href="#" class="fa fa-graduation-cap" id="education_icon" title="Formations"></a></li>
                    </div>
                    <div class="col-3 menu-icon-bg border border-light">
                        <li><a href="#" class="fa fa-briefcase" id="experience_icon" title="Expériences"></a></li>
                    </div>
                    <div class="col-3 menu-icon-bg border border-light">
                        <li><a href="#" class="fa fa-cogs" id="skills_icon" title="Compétences"></a></li>
                    </div>
                </div>
            </ul>
        </div>  
    </div>
</main>