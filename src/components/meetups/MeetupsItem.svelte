<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script lang="ts">
import Button from "../ui/Button.svelte";
    /** ⚫️━━━━━━━━━━━━━━━━━━ JS | TS ━━━━━━━━━━━━━━━━━━⚫️ */

    // #™━━━━━━━━━━━━━━━━━━━━━
    export let id: string = ''
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
    <img alt={title} src={imageURL} id={id}>
  </div>
  
  <!--☰☰☰☰☰☰☰| CONTENT |☰☰☰☰☰☰☰-->
  <div class="contentContainer">
    <p>{description}</p>
  </div>
  
  <!--☰☰☰☰☰☰☰| FOOTER |☰☰☰☰☰☰☰-->
  <footer class="footerButtons">
    <Button class="" href="mailto:{email}" caption="Contact" />
    <Button mode="outline" type="button" caption="Favorite" />
    <Button type="button" caption="Show Details" />
  </footer>
  
  <!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</article>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import '../../../public/styles/MeetupsItem';
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

