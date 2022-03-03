import $ from 'jquery';
let $div = document.querySelector(".access-popup");
$($div).append(`
<div class="content">
  <div class="content__image">
    <img src="https://fictional-university.ejiwen.info/access-jhs/access-logo.svg" />
  </div>
  <p class="content__date">
    May 18-19, 2022
  </p>
  <p class="content__text">
    The largest virtual gathering for employers and higher
    ed professionals focused on accelerating early careers.
  </p>
  <div>
    <button type="button" class="content__btn">Register now</button>
  </div>
</div>
`);
