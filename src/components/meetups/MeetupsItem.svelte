<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script lang="ts">
    /** ⚫️━━━━━━━━━━━━━━━━━━ JS | TS ━━━━━━━━━━━━━━━━━━⚫️ */

    // #™━━━━━━━━━━━━━━━━━━━━━
    export let title: string
    export let subtitle: string
    export let imageURL: string
    export let description: string
    export let address: string
    export let email: string
    // #™━━━━━━━━━━━━━━━━━━━━━

    /**| ™- LABELED-STATEMENT |*/
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */


</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<article class="MeetupsItemContainer">
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
  
  <!--☰☰☰☰☰☰☰| HEADER |☰☰☰☰☰☰☰-->
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  
  <!--☰☰☰☰☰☰☰| IMAGE |☰☰☰☰☰☰☰-->
  <div class="imgContainer">
    <!--suppress HtmlUnknownTarget -->
    <img alt={title} src={imageURL}>
  </div>
  
  <!--☰☰☰☰☰☰☰| CONTENT |☰☰☰☰☰☰☰-->
  <div class="contentContainer">
    <p>{description}</p>
  </div>
  
  <!--☰☰☰☰☰☰☰| FOOTER |☰☰☰☰☰☰☰-->
  <footer>
    <a href="mailto:{email}">Contact</a>
    <button>Show Details</button>
    <button>Favorite</button>
  </footer>
  
  <!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</article>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import '../../../public/styles/MeetupsItem';
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

