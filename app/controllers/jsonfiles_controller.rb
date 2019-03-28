class JsonfilesController < ApplicationController

  #To show the data fields and their relationships in a json data file.
  def show
  end

  #To show the list of json files uploaded to the application.
  def index
    # @jsonfile = Jsonfile.all

  end

  # default: render 'new' template
  def new
  end


  #To create the jsonfile and store it into our database.
  def create
  end

  #To edit the jsonfile, but not really necessary at the moment.
  def edit
  end

  #To update the jsonfile, but also not necessary at the moment.
  def update
  end

  #To delete the jsonfile from database.
  def destroy
  end

end
