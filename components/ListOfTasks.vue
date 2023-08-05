<template>
  <div class="list-of-task-container-parent">
    <div class="list-of-task-container-child">
      <font-awesome-icon icon="circle-check" class="check-color"/>
      <p class="list-of-taks">Do Something awesome!</p>
      <font-awesome-icon icon="trash" class="font-awesome-trash-icon-red"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.list-of-task-container-parent{
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 0.3rem;
}

.list-of-taks{
  font-weight: bold;
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.list-of-task-container-child{
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border: 1px solid #1a1d1c4b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
}

.list-of-task-container-child:hover{
  background-color:#EDEDED;
}

.check-color{
  color:#469c7d;
  font-size: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.check-color:hover{
  color:#0d553b;
}

.font-awesome-trash-icon-red{
  padding-left: 18rem;
  padding-right: 1rem;
  color:white;
  font-size:1.9rem;
}

.list-of-task-container-parent:hover .font-awesome-trash-icon-red {
  color: #FF5C46;
}


@media (max-width: 768px) {
  .font-awesome-trash-icon-red {
    padding-left: 2rem;
  }
}
</style>