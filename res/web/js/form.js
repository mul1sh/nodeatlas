function createMessageForm(name, ipv6) {
    var html = '<div id="messageCreate">';
    html += '<div id="one">';
    html += '<h6>Send Message to '+name+'</h6>';
    html += '<input type="email" placeholder="Your Email" id="from" class="form-control" maxlength="255">';
    html += '<input type="text" id="address" value="'+ipv6+'" disabled class="form-control hidden">';
    html += '<br/><input type="text" placeholder="Subject" id="subject" class="form-control"  maxlength="255">';
    html += '<br/><textarea placeholder="Body" id="message" class="form-control" maxlength="999"></textarea>';
    html += '<br/><div class="text-center disabled">Basic markdown is supported</div>';
    html += '<br/><div class="row"><div class="col col-xs-6 text-center">';
    html += '<input type="reset" id="cancelmessage" class="btn btn-default btn-small" value="Cancel Message"></div>';
    html += '<div class="col col-xs-6 text-center">';
    html += '<input type="submit" id="nextpagesubmit" class="btn btn-small btn-primary" value="Next Page" onclick="next(2); return false;"></div></div>';
    html += '</div><div id="two">';
    html += '<img id="captcha_img">';
    html += '<br/><input type="text" placeholder="Captcha" class="form-control" id="captcha" maxlength="255">';
    html += '<br/><div class="text-center"><button class="btn btn-warning btn-mini" href="#" onclick="loadCAPTCHA($(\'#captcha_img\')); return false;">Load New Captcha</button></div>';
    html += '<br/><div class="row"><div class="col col-xs-6 text-center">';
    html += '<input type="reset" onclick="next(1); return false;" class="btn btn-default btn-small" value="Previous Page"></div>';
    html += '<div class="col col-xs-6 text-center">';
    html += '<input type="submit" id="sendmessage" class="btn btn-small btn-primary" value="Send Message"></div></div>';
    html += '</div></div>';
    return html;
}

function getForm(lat, lng) {
    var form =  '<div id="inputform">';
    form += '<div class="tabby">';
    form += '<div class="tab" id="one">';
    form += '<button class="btn btn-mini btn-success" id="reposition">Reposition</button>';
    form += '&nbsp;<button class="btn btn-mini btn-warning" id="delete">Delete</button>';
    form += '<br/><label><strong>Name</strong> <span class="desc">Marker title</span></label>';
    form += '<input type="text" class="input-medium form-control" placeholder="Required" id="name" name="name" maxlength="255" />';
    form += '<label><strong>Email</strong> <span class="desc">Never shared</span></label>';
    form += '<input type="email" class="input-medium form-control" placeholder="Required" id="email" name="email" maxlength="255" />';
    form += '<label><strong>Address</strong> <span class="desc">'+AddressType+'</span></label>';
    form += '<input type="text" class="input-medium form-control" id="address" name="address" placeholder="Required" maxlength="39"/>';
    form += '<label><strong>Details</strong></label>';
    form += '<input type="text" class="input-medium form-control" placeholder="Home, Work, ..." id="details" maxlength="255"/><br/>';
    form += '<div class="row"><div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-default btn-small" href="#" onclick="cancelRegistration(); return false;">Cancel</button></div>';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(2); return false;">Next</button></div></div>';
    form += '</div>';
    form += '<div class="tab" id="two">';
    form += '<p><strong>Status</strong><br><small>Check all that apply.</small></p>';
    form += '<label>';
    form += '<input type="checkbox" id="active"> ';
    form += 'Active node';
    form += '</label><br/>';
    form += '<label>';
    form += '<input type="checkbox" id="residential"> ';
    form += 'Residential node';
    form += '</label><br/><br/>';
    form += '<div class="row"><div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(1); return false;">Back</button></div>';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(3); return false;">Next</button></div></div>';
    form += '</div>';
    form += '<div class="tab" id="three">';
    form += '<p><strong>Status</strong><br/><small>Check all that apply.</small></p>';
    form += '<label>';
    form += '<input type="checkbox" id="internet"> ';
    form += 'Internet access';
    form += '</label><br/>';
    form += '<label>';
    form += '<input type="checkbox" id="wireless"> ';
    form += 'Wireless access';
    form += '</label><br/>';
    form += '<label>';
    form += '<input type="checkbox" id="wired"> ';
    form += 'Wired (eth) access';
    form += '</label><br/><br/>';
    form += '<div class="row">';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(2); return false;">Back</button></div>';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(4); return false;">Next</button></div></div>';
    form += '</div>';
    form += '<div class="tab" id="four">';
    form += '<p><strong>PGP</strong><br/><small>8 digit or 16 digit.</small></p>';
    form += '<input type="text" class="input-medium form-control" placeholder="CAFEBABE" id="pgp" name="pgp" maxlength="16" />';
    form += '<label><strong>Contact</strong></label>';
    form += '<textarea class="contact form-control" id="contact" placeholder="XMPP username, Reddit username, ..." maxlength="255"></textarea><br/>';
    form += '<input style="display: none;" type="text" id="latitude" name="latitude" value="'+lat+'"/>';
    form += '<input style="display: none;" type="text" id="longitude" name="longitude" value="'+lng+'"/>';
    form += '<div class="row"><div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(3); return false;">Back</button></div>';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(5); return false;">Next</button></div></div></div>';
    form += '<div class="tab" id="five"><div class="row">';
    form += '<div class="col col-xs-12">';
    form += '<label>Submit via curl&nbsp;<button class="btn btn-mini btn-success" href="#" onclick="updateData(\'curl\'); return false;">Update</button></label>';
    form += '<input type="text" class="form-control" placeholder="Curl Data" id="curl">';
    form += '<label>Submit via wget&nbsp;<button class="btn btn-mini btn-success" href="#" onclick="updateData(\'wget\'); return false;">Update</button></label>';
    form += '<br/><input type="text" class="form-control" placeholder="Wget Data" id="wget">';
    form += '<br/></div></div>';
    form += '<div class="row"><div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-primary" href="#" onclick="next(4); return false;">Back</button></div>';
    form += '<div class="col col-xs-6 text-center">';
    form += '<button class="btn btn-small btn-info" onclick="insertUser(); return false;" id="submitatlas">Submit</button></div></div>';
    form += '</div>';
    form += '</div>';
    form += '</div>';
    return form;
}

function next(which) {
  switch (which) {
    case 1:
      $('#one').css('display', 'block');
      $('#two, #three, #four, #five').css('display', 'none');
      break;
    case 2:
      $('#two').css('display', 'block');
      $('#one, #three, #four, #five').css('display', 'none');
      break;
    case 3:
      $('#three').css('display', 'block');
      $('#one, #two, #four, #five').css('display', 'none');
      break;
    case 4:
      $('#four').css('display', 'block');
      $('#one, #two, #three, #five').css('display', 'none');
      break;
    case 5:
      $('#five').css('display', 'block');
      $('#one, #two, #three, #four').css('display', 'none');
      break;
  }
}
