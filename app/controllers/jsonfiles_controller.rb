class JsonfilesController < ApplicationController

  def jsonfile_params
    params.require(:jsonfile).permit(:title, :content)
  end

  #To show the data fields and their relationships in a json data file.
  def show
    id = params[:id] # retrieve movie ID from URI route
    @jsonfile = Jsonfile.find(id) # look up movie by unique ID
  end

  #To show the list of json files uploaded to the application.
  def index
    @jsonfiles = Jsonfile.all
  end

  # default: render 'new' template
  def new
  end


  #To create the jsonfile and store it into our database.
  def create
    @file = params[:content].read
    @title = params[:title]
    @data = JSON.parse(@file)
    @jsonfile = Jsonfile.create!({:title => @title, :content => @data})
    @jsonfile.content = @data
    flash[:notice] = "#{@jsonfile.title} was successfully created."
    redirect_to jsonfiles_path
  end

  #To edit the jsonfile, but not really necessary at the moment.
  def edit
  end

  #To update the jsonfile, but also not necessary at the moment.
  def update
  end

  #To delete the jsonfile from database.
  def destroy
    @jsonfile = Jsonfile.find(params[:id])
    @jsonfile.destroy
    flash[:notice] = "Json File '#{@mjsonfile.title}' deleted."
    redirect_to jsonfiles_path
  end

end
