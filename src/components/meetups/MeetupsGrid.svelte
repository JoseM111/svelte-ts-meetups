<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script lang="ts">
    import MeetupsItemComponent from "./MeetupsItem.svelte";
    import type { Meetup } from "../../global/types"

    /** ⚫️━━━━━━━━━━━━━━━━━━ JS | TS ━━━━━━━━━━━━━━━━━━⚫️ */

        // #™━━━━━━━━━━━━━━━━━━━━━
    export let meetups: Meetup
    // #™━━━━━━━━━━━━━━━━━━━━━

    /**| ™- LABELED-STATEMENT |*/
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */


</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<section>
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
  
  {#each meetups as meetup (meetup.id)}
    <!---->
    <MeetupsItemComponent
      {...meetup}
    />
  {/each}
  
  <!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</section>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/MeetupsGrid.scss';
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

