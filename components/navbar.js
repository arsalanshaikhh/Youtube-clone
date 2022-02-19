function navbar() {
  return `<nav>
    <div class="left">
      <i class="fa-solid fa-bars fa-2x"></i>
      <i class="fa-brands fa-youtube fa-2x"></i
      ><span class="you">YouTube </span>
    </div>
    <div class="mid">
      <input
        type="text"
        placeholder="Search Video"
        id="searchTerm"
      />
      <i id="btn_search" class="btn_search fa-solid fa-magnifying-glass"></i>
      
    </div>
    <div class="right">
      <i class="fa-solid fa-table-cells fa-2x"></i>
      <i class="fa-solid fa-bell fa-2x"></i>
      <i class="fa-solid fa-user fa-2x"></i>
      <!-- <i class="fa-solid fa-video-plus"></i> -->
      <i class="fa-solid fa-video fa-2x"></i>
    </div>
  </nav>`;
}

export default navbar;
