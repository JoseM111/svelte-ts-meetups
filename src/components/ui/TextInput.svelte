<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script lang="ts">

    /** ⚫️━━━━━━━━━━━━━━━━━━ JS | TS ━━━━━━━━━━━━━━━━━━⚫️ */

    /**: - ©MEMBER-PROPERTIES| */
    // |™═════════════════════════
    export let controlType: string = ''
    export let id: string = ''
    export let label: string = ''
    export let rows: number = 1
    export let value: string = ''
    export let type: string = ''
    // |™═════════════════════════

    /**| ™- LABELED-STATEMENT |*/
    // |™════════════════════════════════

    // |™════════════════════════════════

    /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */

    const handleInput = (event) => {
	    // in here, you can switch on type and implement
	    // whatever behaviour you need
	    value = type.match(/^(number|range)$/)
		    ? +event.target.value
		    : event.target.value
    }
    
</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="TextInputContainer">
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
	
	<div class="form-control">
		<label for={id}>{label}</label>
		{#if controlType === 'textarea'}
			<!--suppress CheckEmptyScriptTag -->
			<textarea {rows} id={id} bind:value={value} />
		{:else}
			<input {type} {id} {value} on:input={handleInput} />
		{/if}
	</div>
	
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</div>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/TextInput.scss';
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
