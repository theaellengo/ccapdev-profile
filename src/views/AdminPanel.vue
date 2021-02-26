<template>
  <div class="admin-panel">
    search
    <div class="addbtn">
      <button class="btn" id="show-modal" @click="showModal = !showModal">
        Add Professor
      </button>
    </div>
    <div v-if="showModal" class="dark-overlay">
      <div class="addmodal">
        <ProfEdit
          :viewdata="showAddModal"
          @clickedItem="showAddModal = !showAddModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ProfAdd from '@/components/ProfAdd.vue';
  export default {
    name: 'adminPanel',
    data: () => {
      return {
        idNum: 0,
        showAddModal: false
      };
    },
    components: {
      ProfAdd
    }
  };
</script>

<style scoped>
  .addbtn {
    float: right;
  }
  .addmodal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
