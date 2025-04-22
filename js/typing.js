// New typing animation implementation using TxtType constructor
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        // Deleting text
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Typing text
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Update the element's inner HTML
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    // Calculate typing speed (delta)
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; } // Faster when deleting

    // Check if word is complete or deleted
    if (!this.isDeleting && this.txt === fullTxt) {
        // Pause at end of word
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        // Finished deleting, move to next word
        this.isDeleting = false;
        this.loopNum++;
        delta = 500; // Pause before starting next word
    }

    // Schedule next tick
    setTimeout(function() {
        that.tick();
    }, delta);
};

// Initialize the typing effect on window load
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            // Create a new TxtType instance for each element
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
    // Inject CSS for the cursor effect
    var css = document.createElement("style");
    css.type = "text/css";
    // Use a CSS variable for the cursor color for theme consistency
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--secondary-color); animation: blink-caret 0.75s step-end infinite; }"; 
    
    // Add blink animation keyframes (optional, can also be in main CSS)
    css.innerHTML += `
        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: var(--secondary-color); }
        }`;
    document.body.appendChild(css);
};
