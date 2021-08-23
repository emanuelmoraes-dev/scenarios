<script lang="ts">
    // header props
    export let header = true
    export let headerText = ''

    // collapsable props
    export let collapsable = false
    export let collapse = false
    export let collapseIcon = true
    export let collapseTransitionDuration = '0.5s'

    // events
    export let onClick: () => unknown = () => {}

    // computed states
    $: hiddenHeader = !header || (!$$slots.header && !headerText)

    // functions
    function click () {
        if (collapsable)
            collapse = !collapse
        onClick()
    }
</script>

<div class="card {$$props.class || ''}" style="{$$props.style || ''}">
    <div class="header" class:hidden={hiddenHeader} on:click={() => click()}>
        <slot name="header">
            <div class="default-header">
                <span class="header-text">
                    {headerText}
                </span>
                <slot name="collapse-icon">
                    <span class="collapse-icon" class:hidden={!collapsable || !collapseIcon}>
                        <span class="collapse-icon-up" class:hidden={collapse}>
                            <i class="fas fa-chevron-up"></i>
                        </span>
                        <span class="collapse-icon-down" class:hidden={!collapse}>
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </span>
                </slot>
            </div>
        </slot>
    </div>

    <div class="content">
        <div class="content-value" class:collapse
             style="transition-duration: {collapseTransitionDuration}"
        >
            <slot></slot>
        </div>
    </div>
</div>

<style lang="less">
    // fonts-size
    @font-header: 1.3rem;
    @collapse-icon-wrapper-width: @font-header * 2;

    // backgrounds
    @background-header: #f6443f;
    @background-content: #0d98ba;

    .card {
        display: flex;
        flex-direction: column;

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            color: white;
            font-size: @font-header;
            cursor: pointer;
            user-select: none;
            background-color: @background-header;
            //background-color: #ff720e;

            .default-header {
                width: 100%;
                display: flex;

                &::before {
                    width: @collapse-icon-wrapper-width;
                    content: '';
                }

                .header-text {
                    flex: 1;
                    text-align: center;
                }

                .collapse-icon {
                    width: @collapse-icon-wrapper-width;
                    text-align: center;
                }
            }
        }

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .content-value {
                background-color: @background-content;
                overflow: hidden;
                height: 100%;
                transition-property: height;

                &.collapse {
                    height: 0 !important;
                }
            }
        }
    }
</style>
