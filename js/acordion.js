let heading = document.getElementsByClassName('accordion-heading'),
    cont = document.getElementsByClassName('accordion-block');


for (let i = 0; i < heading.length; i++) {
    let curTitle = heading[i];
    heading[i].addEventListener('click', function() {
        let classes = this.getAttribute('class'),
            newClasses = '',
            classesArr = classes.split(' '),
            newClassesArr = classes.split(' ');
        for (let j = 0; j < classesArr.length; j++) {
            if (classesArr[j] == 'active' || classesArr[j] == 'active-heading' ) {
                classesArr.splice([j], 2);
            }
        }
        if (classesArr.length === newClassesArr.length) {
            classesArr.push('active');
			classesArr.push('active-heading');
            newClasses = classesArr.join(' ');
        } else {
            newClasses = classesArr.join(' ');
        }

        for (let l = 0; l < heading.length; l++) {
            oldClasses = heading[l].getAttribute('class');
            oldClassesArr = oldClasses.split(' ');
            for (let k = 0; k < oldClassesArr.length; k++) {
                if (oldClassesArr[k] == 'active' || oldClassesArr[k] == 'active-heading') {
                    oldClassesArr.splice([k], 2);
                }
                oldClasses = oldClassesArr.join(' ');
                heading[l].setAttribute('class', oldClasses);

            }
        }
        this.setAttribute('class', newClasses);
    })
}