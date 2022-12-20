var progress_bar = $('.progress-bar');
        progressBar_val = parseInt(progress_bar.attr('aria-valuenow'));             //initial value of progress
        var visited_items = [];
        var validator = form.validate();

        $("form input:text").on('change', function(){       //on every input text events change
            var current_item = $(this);
            var item_validated = validator.element(current_item); //validate element true or false

            if(item_validated){
                if(!visited_items.length){
                    visited_items.push(current_item.attr('name'));

                    if(progress_bar.attr('aria-valuenow') < 100){
                        progressBar_val += 10;
                        progress_bar.css({'width' : progressBar_val + '%'}).attr('aria-valuenow', progressBar_val);
						progress-bar.find('sr-only').html(progressBar_val + '%');
                    }
                    if(progress_bar.attr('aria-valuenow') >= 100){
                        progress_bar.css({'width' : 100 + '%'}).attr('aria-valuenow', 100);
						progress-bar.find('sr-only').html('100%');
                        progress_bar.addClass('progress-bar-success');
                    }
                } else {
                    if($.inArray(current_item.attr('name'), visited_items) === -1){ //if is not in array add it
                        visited_items.push(current_item.attr('name'));

                        if(progress_bar.attr('aria-valuenow') < 100){
                            progressBar_val += 10;
                            progress_bar.css({'width' : progressBar_val + '%'}).attr('aria-valuenow', progressBar_val);
							progress-bar.find('sr-only').html(progressBar_val + '%');
						}
                        if(progress_bar.attr('aria-valuenow') >= 100){
                            progress_bar.css({'width' : 100 + '%'}).attr('aria-valuenow', 100);
							progress-bar.find('sr-only').html('100%');
                            progress_bar.addClass('progress-bar-success');
                        }
                    }
                }

            }

        });   