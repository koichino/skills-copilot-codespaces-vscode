function skillsMember() {
  var skill = document.getElementById("skill").value;
  var member = document.getElementById("member").value;
  var skillMember = document.getElementById("skillMember").value;
  var skillMember = skill + " " + member;
  document.getElementById("skillMember").value = skillMember;
}