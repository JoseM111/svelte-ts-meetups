<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<!-- ━━━━━━━━━ JS | TS ━━━━━━━━━ -->
<script lang="ts">
  import HeaderUIComponent from "./components/ui/HeaderUI.svelte"
  import MeetupsGridComponent from "./components/meetups/MeetupsGrid.svelte"
  import { meetups } from "./global/data"
  /** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /**: - ©MEMBER-PROPERTIES| */
  // #™━━━━━━━━━━━━━━━━━━━━━
  // #™━━━━━━━━━━━━━━━━━━━━━

  /**| ™- LABELED-STATEMENT |*/
  // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */

//
</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="AppContainer">
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
  
  <!--☰☰☰☰☰☰☰☰| HEADER-UI |☰☰☰☰☰☰☰☰☰-->
  <HeaderUIComponent />
  
  <!-- ══════════════════════════════ -->
	<main>
		
		<!--☰☰☰☰☰☰☰☰| MEETUPS-ITEM |☰☰☰☰☰☰☰☰☰-->
		<MeetupsGridComponent
      {meetups}
    />

	</main>
  <!-- ══════════════════════════════ -->
  
  <!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</div>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━ -->
<style lang="scss">
	@import 'public/styles/App.scss';
  @import '../public/styles/App';

  h1 {
    //color: mediumpurple;
  }
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
