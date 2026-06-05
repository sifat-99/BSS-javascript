const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });

        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));

        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();
