<template>
  <div class="app-main__inner">
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"> </i>
          </div>
          <div>
            Regular Tables
            <div class="page-title-subheading">
              Tables are the backbone of almost all web applications.
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <button
            type="button"
            data-toggle="tooltip"
            title="Example Tooltip"
            data-placement="bottom"
            class="btn-shadow mr-3 btn btn-dark"
          >
            <i class="fa fa-star"></i>
          </button>
          <div class="d-inline-block dropdown">
            <button
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="btn-shadow dropdown-toggle btn btn-info"
            >
              <span class="btn-icon-wrapper pr-2 opacity-7">
                <i class="fa fa-business-time fa-w-20"></i>
              </span>
              Buttons
            </button>
            <div
              tabindex="-1"
              role="menu"
              aria-hidden="true"
              class="dropdown-menu dropdown-menu-right"
            >
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">
                    <i class="nav-link-icon lnr-inbox"></i>
                    <span> Inbox </span>
                    <div class="ml-auto badge badge-pill badge-secondary">
                      86
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">
                    <i class="nav-link-icon lnr-book"></i>
                    <span> Book </span>
                    <div class="ml-auto badge badge-pill badge-danger">5</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">
                    <i class="nav-link-icon lnr-picture"></i>
                    <span> Picture </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    disabled
                    href="javascript:void(0);"
                    class="nav-link disabled"
                  >
                    <i class="nav-link-icon lnr-file-empty"></i>
                    <span> File Disabled </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Table striped</h5>
            <table class="mb-0 table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataApi" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.sale }}%</td>
                  <td>{{ new Date(item.createdAt * 1000) }}</td>
                  <td>
                    <i
                      class="fa fa-fw"
                      aria-hidden="true"
                      title="Copy to use edit"
                      ></i
                    >
                    <div @click="deleteItem(item.id)">
                      <i
                        class="fa fa-fw"
                        aria-hidden="true"
                        title="Copy to use trash"
                        ></i
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const dataApi = ref([]);
const fetchData = async () => {
  const response = await axios.get(
    "https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products"
  );
  dataApi.value = response.data;
  console.log(response.data);
};

const deleteItem = async (id) => {
  const response = await axios.delete(
    "https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/" + id
  );
  console.log(response);
  fetchData();
};


fetchData();
</script>

<style lang="scss" scoped></style>
